import { useState } from 'react';
import { Box, Input, Button, List, ListItem, IconButton, Checkbox } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <Box p="4">
      <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleAddTodo} colorScheme="blue" ml="2">Add</Button>
      <List spacing={3} mt="4">
        {todos.map(todo => (
          <ListItem key={todo.id} d="flex" alignItems="center">
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(todo.id)} mr="2" />
            <Box flex="1" as={todo.completed ? 's' : 'span'}>{todo.text}</Box>
            <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(todo.id)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoApp;