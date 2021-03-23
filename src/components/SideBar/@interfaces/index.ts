export interface IGenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface ISideBarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: IGenreResponseProps[]
}