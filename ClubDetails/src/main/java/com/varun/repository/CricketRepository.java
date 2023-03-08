package com.varun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.varun.Entity.CricketClub;

public interface CricketRepository extends JpaRepository<CricketClub, Integer> {

}
