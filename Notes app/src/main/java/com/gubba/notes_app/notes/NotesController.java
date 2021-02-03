package com.gubba.notes_app.notes;

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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class NotesController {
	
	@Autowired
	private NotesService nService;

	@GetMapping("/greeting")
	public String greeting() {
	return "greeting";
	}
	
	@GetMapping("/notesHomePage")
	public List<Notes> notesList()
	{
		List<Notes> thelist = nService.getAllNotes(); 
		//model.addAttribute("nlist", thelist);
		return  thelist;
	}
	
	@PostMapping("/AddNote")
	public Notes addNotes(@RequestBody Notes note)
	{
		long millis=System.currentTimeMillis();  
        java.sql.Date date=new java.sql.Date(millis); 
        note.setDateCreated(date);
		return nService.insertNote(note);
	}
	
	@GetMapping("/note/{id}")
	public Notes getNoteById(@PathVariable long id)
	{
		return nService.getNoteSpecific(id);
	}
	
	@PutMapping("/updateNote")
	public Notes saveNote(@RequestBody Notes note)
	{
		long millis=System.currentTimeMillis();  
        java.sql.Date date=new java.sql.Date(millis); 
        note.setDateCreated(date);
		return nService.updateNoteSpecific(note);
	}
	
	@DeleteMapping("/deleteNote/{id}")
	public String deleteNote(@PathVariable long id)
	{
		
		return nService.deleteNoteSpecific(id);
	}
	
	@GetMapping("/notesByRecentDate")
	public List<Notes> notesListByDate()
	{
		return nService.getNotesOrderedByDate();
	}
	
	@GetMapping("/notesByAlpha")
	public List<Notes> notesListByAlpha()
	{
		return nService.getNotesOrderedByAlpha();
	}
}
