import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule
    ],
    exports: [
        FlexLayoutModule,
        MatToolbarModule
    ],
    providers: [],
})
export class MaterialModule {}
