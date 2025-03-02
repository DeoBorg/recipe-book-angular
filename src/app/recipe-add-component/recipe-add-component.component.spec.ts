import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddComponentComponent } from './recipe-add-component.component';

describe('RecipeAddComponentComponent', () => {
  let component: RecipeAddComponentComponent;
  let fixture: ComponentFixture<RecipeAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeAddComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
