import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../helpFun/todoFun";
import Card from "./Card";
import { Grid } from "@mui/material";

const Cards = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const status = useSelector((state) => state.status);
  const searchParam = useSelector((state) => state.searchQuery);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === "loading") {
    return <div>Loading</div>;
  } else if (status === "failed") {
    return <div>ERROR</div>;
  }

  return (
    <div>
      <Grid container spacing={5} sx={{ p: 3 }}>
        {
            todos.filter(todo=>todo.name.toLowerCase().includes(searchParam.toLowerCase())).map(todo=>(
                <Card name={todo.name} email={todo.email} phone={todo.phone} website={todo.website} username={todo.username} />
            ))
        }
      </Grid>
    </div>
  );
};

export default Cards;
