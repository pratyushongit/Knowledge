export interface IPaginationProps {
  count: number;
  disabled: boolean;
  hideNextButton: boolean;
  hidePrevButton: boolean;
  onChange: (value: number) => void;
  page: number;
  showFirstButton: boolean;
  showLastButton: boolean;
}

export interface IPostsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
