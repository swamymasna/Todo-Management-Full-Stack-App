package com.swamy.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.swamy.dto.TodoDto;
import com.swamy.entity.Todo;
import com.swamy.exception.ResourceNotFoundException;
import com.swamy.repository.TodoRepository;
import com.swamy.service.TodoService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

	private TodoRepository todoRepository;

	private ModelMapper modelMapper;

	@Override
	public TodoDto saveTodo(TodoDto todoDto) {

		Todo todo = modelMapper.map(todoDto, Todo.class);

		Todo savedTodo = todoRepository.save(todo);

		return modelMapper.map(savedTodo, TodoDto.class);
	}

	@Override
	public TodoDto getTodoById(Integer todoId) {

		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Not Found With Id : " + todoId));

		return modelMapper.map(todo, TodoDto.class);
	}

	@Override
	public List<TodoDto> getAllTodos() {

		List<Todo> list = todoRepository.findAll();

		return list.stream().map(todo -> modelMapper.map(todo, TodoDto.class)).collect(Collectors.toList());

	}

	@Override
	public TodoDto updateTodo(Integer todoId, TodoDto todoDto) {

		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Not Found With Id : " + todoId));

		todo.setTitle(todoDto.getTitle());
		todo.setDescription(todoDto.getDescription());
		todo.setCompleted(todoDto.isCompleted());

		Todo updatedTodo = todoRepository.save(todo);

		return modelMapper.map(updatedTodo, TodoDto.class);
	}

	@Override
	public void deleteTodo(Integer todoId) {

		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Not Found With Id : " + todoId));

		todoRepository.deleteById(todo.getTodoId());
	}

	@Override
	public TodoDto completeTodo(Integer todoId) {

		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Not Found With Id : " + todoId));

		todo.setCompleted(true);

		Todo updatedTodo = todoRepository.save(todo);

		return modelMapper.map(updatedTodo, TodoDto.class);
	}

	@Override
	public TodoDto InCompleteTodo(Integer todoId) {

		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo Not Found With Id : " + todoId));

		todo.setCompleted(false);

		Todo updatedTodo = todoRepository.save(todo);

		return modelMapper.map(updatedTodo, TodoDto.class);
	}

}
