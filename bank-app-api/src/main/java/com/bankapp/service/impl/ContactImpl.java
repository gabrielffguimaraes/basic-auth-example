package com.bankapp.service.impl;

import com.bankapp.model.Contact;
import com.bankapp.repository.ContactRepository;
import com.bankapp.service.ContactService;
import org.springframework.stereotype.Service;

@Service
public class ContactImpl implements ContactService {
    private final ContactRepository contactRepository;

    public ContactImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }
}
