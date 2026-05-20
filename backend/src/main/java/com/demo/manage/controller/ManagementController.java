package com.demo.manage.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.manage.exception.ResourceNotFoundException;
import com.demo.manage.model.Solar;
import com.demo.manage.respository.ManagementRespository;
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/solar")
public class ManagementController {
	@Autowired
	private ManagementRespository maRe;
	@GetMapping("/getDetails")
	public List<Solar> getDetails() {
		return maRe.findAll();
	}
	@PostMapping("/addDetails")
	public Solar Save(@RequestBody Solar solar) {
		return maRe.save(solar);	
	}
	@GetMapping("/getDetals/{id}")
	public Solar getById(@PathVariable int id) {
		return maRe.findById(id).orElseThrow(()-> new ResourceNotFoundException("Lead not found with id: " + id ));
		}
	@PutMapping("/update/{id}")
	public Solar update(@PathVariable int id,@RequestBody Solar solar) {
		Solar t=maRe.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resource not found with this id: " + id));
		t.setFullName(solar.getFullName());
		t.setPhone(solar.getPhone());
		t.setEmail(solar.getEmail());
		t.setLocation(solar.getLocation());
		t.setPropertyType(solar.getPropertyType());
		t.setSystemSizeKw(solar.getSystemSizeKw());
		t.setSource(solar.getSource());
		t.setStatus(solar.getStatus());
		t.setCreatedAt(solar.getCreatedAt());
		t.setUpdatedAt(LocalDateTime.now());
		return maRe.save(t);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		Solar t=maRe.findById(id).orElseThrow(() -> new ResourceNotFoundException("Resource not found with this id: " + id));
		maRe.delete(t);
		return "Successfully deleted";
	}


}
