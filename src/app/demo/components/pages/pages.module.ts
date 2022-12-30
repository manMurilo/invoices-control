import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        CommonModule,
        PagesRoutingModule,
        ReactiveFormsModule,
        CalendarModule,
    ],
})
export class PagesModule {}
