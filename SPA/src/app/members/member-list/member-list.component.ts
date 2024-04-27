import { Component, OnInit } from '@angular/core';
import { IMember } from 'src/app/_models/imember';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members$: Observable<IMember[]> | undefined;
  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.members$ = this.membersService.getMembers();
  }
}
