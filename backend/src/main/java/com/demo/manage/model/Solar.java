package com.demo.manage.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.processing.Pattern;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Management_Table")
public class Solar {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(name = "phone", nullable = false, length = 10)
    private String phone;

    @Column(name = "email", nullable = false, length = 150)
    private String email;

    @Column(name = "location", nullable = false, length = 100)
    private String location;

    @Column(name = "property_type", nullable = false, length = 50)
    private String propertyType; 
    
    @Column(name = "system_size_kw", nullable = false)
    private Integer systemSizeKw;

    @Column(name = "source", nullable = false, length = 50)
    private String source; // Website, Referral, Walk-in, Social Media

    @Column(name = "status", nullable = false, length = 50)
    private String status = "New Lead"; // Default pipeline stage

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	public Integer getSystemSizeKw() {
		return systemSizeKw;
	}

	public void setSystemSizeKw(Integer systemSizeKw) {
		this.systemSizeKw = systemSizeKw;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
    
    
}
