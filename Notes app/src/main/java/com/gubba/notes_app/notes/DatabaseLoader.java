package com.gubba.notes_app.notes;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner{
	
	@Autowired
	private NotesRepository notesRepository;

	@Override
	public void run(String... args) throws Exception {
		/*long millis=System.currentTimeMillis();  
        java.sql.Date date=new java.sql.Date(millis); 
		notesRepository.save(new Notes("book1","about book 1", date));*/
	}
}
