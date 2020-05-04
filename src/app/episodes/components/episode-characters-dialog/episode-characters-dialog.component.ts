import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-episode-characters-dialog',
  templateUrl: './episode-characters-dialog.component.html',
  styleUrls: ['./episode-characters-dialog.component.scss']
})
export class EpisodeCharactersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EpisodeCharactersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
