package com.swamy.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swamy.dto.TodoDto;
import com.swamy.service.TodoService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/todos")
public class TodoRestController {

	private TodoService todoService;

	@PostMapping
	public ResponseEntity<TodoDto> saveTodo(@RequestBody TodoDto todoDto) {
		return new ResponseEntity<TodoDto>(todoService.saveTodo(todoDto), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<TodoDto>> getAllDtos() {
		return ResponseEntity.ok(todoService.getAllTodos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<TodoDto> getOneDto(@PathVariable("id") Integer todoId) {
		return new ResponseEntity<TodoDto>(todoService.getTodoById(todoId), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<TodoDto> updateTodo(@PathVariable("id") Integer todoId, @RequestBody TodoDto todoDto) {
		return new ResponseEntity<TodoDto>(todoService.updateTodo(todoId, todoDto), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> removeTodo(@PathVariable("id") Integer todoId) {
		todoService.deleteTodo(todoId);
		return new ResponseEntity<String>("Todo Deleted Successfully : " + todoId, HttpStatus.OK);
	}

	@PatchMapping("/{id}/complete")
	public ResponseEntity<TodoDto> completeTodo(@PathVariable("id") Integer todoId) {
		return ResponseEntity.ok(todoService.completeTodo(todoId));
	}

	@PatchMapping("/{id}/in-complete")
	public ResponseEntity<TodoDto> inCompleteTodo(@PathVariable("id") Integer todoId) {
		return ResponseEntity.ok(todoService.InCompleteTodo(todoId));
	}
}
