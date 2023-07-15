package com.swamy.dto;

import lombok.Data;

@Data
public class TodoDto {

	private Integer todoId;

	private String title;

	private String description;

	private boolean completed;
}
