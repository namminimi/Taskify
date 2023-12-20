import Image from 'next/image';
import { CardProps, Mock_1_6_Cards } from '@/pages/api/mock';
import { IconCalendar } from '@/public/svgs';
import ColorChip from './chips/ColorChip';
import TagChip from './chips/TagChip';

//날짜 타입 그냥 내가 맘대로 씀.. 아마 실제로는 함수 써서 바꿔야 될 듯?

function Card({ data }: { data: CardProps }) {
  if (!data) return;
  return (
    <div className='card flex flex-col gap-6 tablet:flex-row pc:w-314 pc:flex-col pc:gap-10'>
      {data.imageUrl && <CardImage src={data.imageUrl} />}
      <div className='flex w-full flex-col gap-6 pc:gap-10'>
        <p className='body1-normal'>{data.title}</p>
        <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-16 pc:flex-col pc:gap-10'>
          <Tags tags={data.tags} />
          <CardInfo date={data.dueDate} assignee={data.assignee} />
        </div>
      </div>
    </div>
  );
}

export default Card;

function CardImage({ src }: { src: string }) {
  return (
    <div className='flex-center relative mb-4 h-152 w-full tablet:h-53 tablet:w-91 pc:h-160 pc:w-274'>
      <Image
        fill
        className='rounded-md object-cover'
        sizes='100%'
        src={src}
        alt='카드 이미지'
        priority={true}
      />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className='flex shrink-0 gap-6'>
      {tags.map((tag, key: number) => {
        //태그 컴포넌트 들어가면 됨. 지금은 내가 임의로 만든거..
        return <TagChip key={key} str={tag} />;
      })}
    </div>
  );
}

interface AssigneeInfo {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

interface CardInfoProps {
  date: string;
  assignee: AssigneeInfo;
}

// 색상 기준을 모르겠다...............알파벳에 따라 달라지나? 사용자 이미지 컴포넌트 들어가야 됨.
function CardInfo({ date, assignee }: CardInfoProps) {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-4'>
        <IconCalendar />
        <p className='caption-normal h-13 text-gray-5 tablet:h-15'>{date}</p>
      </div>
      <div className='relative h-22 w-22'>
        <Image
          fill
          src={assignee.profileImageUrl}
          sizes='100%'
          className='rounded-full object-cover'
          alt='작성자 이미지'
        />
      </div>
    </div>
  );
}
