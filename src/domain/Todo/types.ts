export type Todo = {
  id: string;
  title: string;
  details: string;
  isFavourite: boolean;
  date:string
};

export type TodoState = {
  allTodos: Todo[];
  searchTodo: Todo[];
  showSearchResult: boolean;
};
