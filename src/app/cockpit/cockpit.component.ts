import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent',{static:true}) newServerContent:ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  onAddServer(serverNameRef:HTMLInputElement) {
    console.log(serverNameRef);
    this.serverCreated.emit(
      {
        serverName: serverNameRef.value,
        serverContent: this.newServerContent.nativeElement.value
      });
  
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent.nativeElement.value
      });
  
  }

}
