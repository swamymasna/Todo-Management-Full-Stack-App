package com.swamy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swamy.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
