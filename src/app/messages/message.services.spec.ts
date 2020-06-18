import { Injectable } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let component: MessageService;
  let fixture: ComponentFixture<MessageService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ MessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.get(MessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all messages', () => {
    component.addMessage('This is the first message');
    component.addMessage('This is the second message');
    const messages:string[] = component.Messages;
    expect(messages.length).toBe(2);
  })
});
