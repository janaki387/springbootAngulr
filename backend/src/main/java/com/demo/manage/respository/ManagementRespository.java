package com.demo.manage.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.manage.model.Solar;


public interface ManagementRespository extends JpaRepository<Solar,Integer>{

}
