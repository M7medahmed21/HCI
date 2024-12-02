import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent {
  userName: string = 'User Name';
  timeAgo: string = 'a moment ago';
  commentText: string = 'This is a comment!';
  userImageId: string = '100';
}
