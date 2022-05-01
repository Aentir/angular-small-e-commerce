import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosInfoComponent } from './articulos-info.component';

describe('ArticulosInfoComponent', () => {
  let component: ArticulosInfoComponent;
  let fixture: ComponentFixture<ArticulosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
