import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@core/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FilterComponent } from './components/filter/filter.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [NavbarComponent, SliderComponent, FilterComponent, SpinnerComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        MaterialModule
    ],
    exports: [NavbarComponent, SliderComponent, FilterComponent, SpinnerComponent],
    providers: [],
})
export class SharedModule {}
