package com.gubba.notes_app.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotesService {
	
	@Autowired
	private NotesRepository notesRepository;
	
	public List<Notes> getAllNotes()
	{
		List<Notes> notesList = (List<Notes>) notesRepository.findAll();
		return notesList;
	}
	
	public void insertNote(Notes n1)
	{
		notesRepository.save(n1);
	}
}
