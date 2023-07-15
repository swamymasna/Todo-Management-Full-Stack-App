package com.swamy.service;

import java.util.List;

import com.swamy.dto.TodoDto;

public interface TodoService {

	TodoDto saveTodo(TodoDto todoDto);

	List<TodoDto> getAllTodos();

	TodoDto getTodoById(Integer todoId);

	TodoDto updateTodo(Integer todoId, TodoDto todoDto);

	void deleteTodo(Integer todoId);

	TodoDto completeTodo(Integer todoId);

	TodoDto InCompleteTodo(Integer todoId);

}
