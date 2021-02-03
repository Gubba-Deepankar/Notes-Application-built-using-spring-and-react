package com.gubba.notes_app.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NotesController {
	
	@Autowired
	private NotesService nService;

	@GetMapping("/greeting")
	public String greeting() {
	return "greeting";
	}
	
	@GetMapping("/notesHomePage")
	public String notesList(Model model)
	{
		List<Notes> thelist = nService.getAllNotes(); 
		model.addAttribute("nlist", thelist);
		return "index";
	}
	
	@PostMapping("/AddNote")
	public String addNotes(@ModelAttribute Notes note)
	{
		nService.insertNote(note);
		return "index";
	}
}
