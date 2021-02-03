package com.gubba.notes_app.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
	
	public Notes insertNote(Notes n1)
	{
		return notesRepository.save(n1);
	}
	
	public Notes getNoteSpecific(long id)
	{
		return notesRepository.findById(id).orElse(null);
	}
	
	public Notes updateNoteSpecific(Notes note1)
	{
		return notesRepository.save(note1);
	}
	
	public String deleteNoteSpecific(long id)
	{
		notesRepository.deleteById(id);
		return "successfully deleted";
	}
	
	public List<Notes> getNotesOrderedByDate()
	{
		List<Notes> listNotes = notesRepository.findAll(Sort.by(Sort.Direction.DESC, "dateCreated"));
		return listNotes;
	}
	
	public List<Notes> getNotesOrderedByAlpha()
	{
		List<Notes> listNotes = notesRepository.findAll(Sort.by(Sort.Direction.ASC, "title"));
		return listNotes;
	}
}
