package com.gubba.notes_app.notes;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotesRepository extends CrudRepository<Notes, Long>{

}
