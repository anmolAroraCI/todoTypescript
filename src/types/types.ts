export type Todo = {
  id: string;
  title: string;
  details: string;
  isFavourite: boolean;
  date:string
};

// export type DefaultLoadingStatus =
//   | "not loaded"
//   | "loading"
//   | "loaded"
//   | "error";
// export type DefaultLoadingState = {
//   loading: DefaultLoadingStatus;
//   error?: string;
// };

export type TodoState = {
  allTodos: Todo[];
  searchTodo: Todo[];
  showSearchResult: boolean;
  favTodo: Todo[];
};

export type myItem = {
  key: string;
  todoObj: Todo;
  todoDelete: (id: string) => void;
};
