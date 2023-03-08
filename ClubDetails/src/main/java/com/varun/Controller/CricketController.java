package com.varun.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.varun.Entity.CricketClub;
import com.varun.service.CricketService;

@RestController
@CrossOrigin
public class CricketController {

	@Autowired
	private CricketService service;
		
	@GetMapping("/display")
	public List<CricketClub> getAll(){
		return service.getAll();
	}
	
	@PostMapping("/post")
	public CricketClub postDet(@RequestBody CricketClub c) {
		return service.postAll(c);
	}
	
	@PutMapping("/updateAdd/{id}")
	public CricketClub update(@PathVariable int id, @RequestBody CricketClub c) {
		return service.update(id, c);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id) {
		 service.delete(id);
		 return "Deleted";	
	}
}
