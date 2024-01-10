import { useAtom } from 'jotai/index';
import { useSetAtom } from 'jotai/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CardProps } from 'src/types';
import useRequest from '@/hooks/useRequest';
import { cardAtom } from '@/store/cardAtom';
import { ColumnsAtom } from '@/store/columnsAtom';
import { ImageUrlAtom } from '@/store/imageUrlAtom';
import { closeAllModals } from '@/store/modalAtom';
import { changedAtom } from '@/containers/Dashboard/DashboardId';
import { Button } from '@/components/buttons';
import ManagerDropdown from '@/components/dropdowns/ManagerDropdown';
import StateDropdown from '@/components/dropdowns/StateDropdown';
import ImageDrop from '@/components/image-drop/ImageDrop';
import Input from '@/components/inputs/Input';

interface Props {
  type: 'create' | 'edit';
  columnId: number;
  cardId?: number;
}

interface FormValues {
  assigneeUserId?: number;
  dashboardId?: number;
  columnId?: number;
  title?: string;
  description?: string;
  dueDate?: string;
  tags?: string[];
  imageUrl?: string;
}

function TodoForm({ type = 'create', columnId }: Props) {
  const [card, setCard] = useAtom(cardAtom);
  const [, closeAll] = useAtom(closeAllModals);
  const setColumnTitle = useSetAtom(ColumnsAtom);
  const [managerName, setManagerName] = useState('');

  const router = useRouter();
  const dashboardId = router.query.dashboardId ? +router.query.dashboardId : 0;

  const [imageUrl, setImageUrl] = useAtom(ImageUrlAtom);

  let initialValues: FormValues = {
    columnId,
    dashboardId,
  };

  if (type === 'edit') {
    initialValues = { ...card };
  }

  const [tagList, setTagList] = useState<string[]>(
    card && type === 'edit' ? [...card.tags] : [],
  );
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleSetTagList = (newTagList: string[]) => {
    setTagList(newTagList);
    setValues((preValues) => ({
      ...preValues,
      tags: newTagList,
    }));
  };

  const handleSetDate = (date: string) => {
    setValues((preValues) => ({
      ...preValues,
      dueDate: date,
    }));
  };

  const handleSetManager = (assigneeUserId: number) => {
    setValues((preValues) => ({
      ...preValues,
      assigneeUserId,
    }));
  };

  const handleSetState = (newColumnId: number) => {
    setValues((preValues) => ({
      ...preValues,
      columnId: newColumnId,
    }));
  };

  const title = type === 'edit' ? '할 일 수정' : '할 일 생성';

  const handleValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const { fetch: postData } = useRequest<CardProps>({
    skip: true,
    options: { url: 'cards/', method: 'post' },
  });

  const { fetch: editData } = useRequest<CardProps>({
    skip: true,
    options: { url: `cards/${card.id}`, method: 'put' },
  });

  const handleReset = () => {
    closeAll();
    setColumnTitle({ columnTitle: '' });
    setCard({ ...card, imageUrl: '' });
    setImageUrl({ imageUrl: '' });
    setManagerName('');
  };

  const [changed, setChanged] = useAtom(changedAtom);

  const handleCreateTodo = async () => {
    values.imageUrl = imageUrl.imageUrl ? imageUrl.imageUrl : undefined;

    try {
      const { data } = await postData({
        data: { ...values },
      });

      if (!data) return;
      handleReset();
      setChanged(!changed);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleEditTodo = async () => {
    values.imageUrl = card.imageUrl;

    try {
      const { data } = await editData({
        data: { ...values },
      });

      if (!data) return;
      handleReset();
      setChanged(!changed);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <form className='mb-70 flex flex-col gap-30'>
      <h1 className='heading1-bold'>{title}</h1>
      <div className='flex gap-12'>
        {type === 'edit' && (
          <StateDropdown
            stateId={card.columnId}
            handleSetState={handleSetState}
          />
        )}

        <ManagerDropdown
          handleSetManager={handleSetManager}
          managerId={card.assignee?.id}
          managerName={managerName}
          setManagerName={setManagerName}
          type={type}
        />
      </div>
      <Input
        type='text'
        title='제목'
        required={true}
        placeholder='제목을 입력해 주세요'
        name='title'
        onInput={handleValuesChange}
        value={values.title}
      />
      <Input
        type='textarea'
        title='설명'
        required={true}
        placeholder='설명을 입력해 주세요'
        name='description'
        onInput={handleValuesChange}
        value={values.description}
      />
      <Input
        type='date'
        title='마감일'
        name='dueDate'
        handleSetDate={handleSetDate}
        value={values.dueDate}
      />
      <Input
        type='tag'
        title='태그'
        setTagList={handleSetTagList}
        placeholder='입력 후 Enter'
        tagList={tagList}
        name='tags'
      />
      <div>
        <label className='text-[18px] font-[500]'>이미지</label>
        <ImageDrop
          type={'modal'}
          columnId={columnId}
          initialImageUrl={card.imageUrl}
        />
      </div>
      <div className='absolute bottom-0 flex gap-10 tablet:right-0'>
        <Button.Secondary type='button' size='lg' onClick={handleReset}>
          취소
        </Button.Secondary>
        {type === 'edit' ? (
          <Button type='button' size='lg' onClick={handleEditTodo}>
            수정
          </Button>
        ) : (
          <Button type='button' size='lg' onClick={handleCreateTodo}>
            생성
          </Button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
