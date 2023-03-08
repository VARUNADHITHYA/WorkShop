package com.varun.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.varun.Entity.CricketClub;
import com.varun.repository.CricketRepository;

@Service
public class CricketService {
	
	@Autowired
	private CricketRepository repo;

	//GET
	public List<CricketClub> getAll() {
		
		return repo.findAll();
	}
	
	//POST
	public CricketClub postAll(CricketClub c) {
		return repo.save(c);
	}
	
	//PUT
	public CricketClub update(int sNo, CricketClub c) {
		return repo.saveAndFlush(c);
	}
	
	//DELETE
	public void delete(int id) {
		repo.deleteById(id);
	}
}
