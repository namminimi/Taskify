import { useRouter } from 'next/router';
import { useState } from 'react';
import { DashboardProps } from '@/pages/api/mock';
import DashboardButton from '@/components/buttons/DashboardButton';
import AddChip from '@/components/chips/AddChip';
import DashboardForm from '@/components/modal/FormComponents/DashboardForm';
import Modal from '@/components/modal/Modal';
import ArrowButtonPageChange from './ArrowButtonPageChange';
import MyDashboardButton from './MyDashboardButton';

interface ButtonProps {
  data: DashboardProps[] | undefined;
  totalCount: number | undefined;
}

function MyDashboardButtons({ data, totalCount }: ButtonProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalCountAvailable = totalCount !== undefined && totalCount > 0;
  const itemsPerPage = 6; // 페이지당 표시할 아이템 개수
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex =
    currentPage == 1
      ? startIndex + itemsPerPage - 1
      : startIndex + itemsPerPage;

  const handleModalClose = () => {};

  return (
    <div className='grid grid-flow-row gap-8 tablet:grid-cols-2 pc:grid-cols-3'>
      {currentPage == 1 && ( //페이지 번호가 1인 경우에만 대시 보드 추가 버튼 보이게
        <Modal>
          <>
            <Modal.Open opens='modal-form'>
              <DashboardButton className='mx-12'>
                새로운 대시 보드
                <AddChip />
              </DashboardButton>
            </Modal.Open>
            <Modal.Window name='modal-form'>
              <DashboardForm onCloseModal={handleModalClose} />
            </Modal.Window>
          </>
        </Modal>
      )}
      {totalCountAvailable &&
        data
          ?.slice(startIndex, endIndex) // 페이지 범위에 맞게 슬라이싱
          .map((dashBoard, key: number) => (
            <div key={key}>
              <MyDashboardButton data={dashBoard} />
            </div>
          ))}
      {totalCountAvailable && (
        <ArrowButtonPageChange
          totalCount={totalCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default MyDashboardButtons;
