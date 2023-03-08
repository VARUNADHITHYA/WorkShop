package com.varun.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "club_details")
public class CricketClub {
	
	@Id
	private int jersey_no;
	private int Runs;
	private int Economy;
	private String member_name;
	private String member_role;
	private String type;
	private String gender;
	private int age;
	public int getJersey_no() {
		return jersey_no;
	}
	public void setJersey_no(int jersey_no) {
		this.jersey_no = jersey_no;
	}
	public String getMember_name() {
		return member_name;
	}
	public void setMember_name(String member_name) {
		this.member_name = member_name;
	}
	public String getMember_role() {
		return member_role;
	}
	public void setMember_role(String member_role) {
		this.member_role = member_role;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
		
	}
	public int getRuns() {
		return Runs;
	}
	public void setRuns(int runs) {
		Runs = runs;
	}
	public int getEconomy() {
		return Economy;
	}
	public void setEconomy(int economy) {
		Economy = economy;
	}
	
	public CricketClub(int jersey_no, String member_name, String member_role, String type, String gender, int age, int Runs, int Economy) {
		super();
		this.jersey_no = jersey_no;
		this.Runs = Runs;
		this.Economy = Economy;
		this.member_name = member_name;
		this.member_role = member_role;
		this.type = type;
		this.gender = gender;
		this.age = age;
	}
	
	public CricketClub() {
		
	}
		
}



