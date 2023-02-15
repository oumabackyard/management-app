import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListAnnoncesService } from '../list-annonces.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  constructor(private annonceSer : ListAnnoncesService,
    private router : Router) { }

  ngOnInit() {
  }

  addNewAnnonce(valueForm){
    this.annonceSer.addAnnonce(valueForm);
    this.router.navigateByUrl('/annonces');
  }
  onReset(f: NgForm) {
    f.resetForm();
  }

}