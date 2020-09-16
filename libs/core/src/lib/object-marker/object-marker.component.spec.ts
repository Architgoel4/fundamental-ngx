import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectMarkerComponent } from './object-marker.component';

@Component({
    selector: 'fd-test-object-marker',
    template: ` <span fd-object-marker>Test Object Marker</span> `
})
class TestObjectMarkerComponent {
    @ViewChild(ObjectMarkerComponent, { static: true })
    objectMarkerComponent: ObjectMarkerComponent;
}

describe('ObjectMarkerComponent', () => {
    let component: ObjectMarkerComponent;
    let fixture: ComponentFixture<TestObjectMarkerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjectMarkerComponent, TestObjectMarkerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestObjectMarkerComponent);
        component = fixture.componentInstance.objectMarkerComponent;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should Add Icon', () => {
        component.glyph = 'flag';
        component.ngAfterViewInit();
        component.buildComponentCssClass();
        fixture.detectChanges();
        expect(component.elementRef().nativeElement.firstChild.classList.contains('sap-icon--flag')).toBe(true);
    });

    it('Should Add Clickable Class', () => {
        component.clickable = true;
        component.ngAfterViewInit();
        component.buildComponentCssClass();
        fixture.detectChanges();
        expect(component.elementRef().nativeElement.classList.contains('fd-object-marker--link')).toBe(true);
    });
});
