import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroTestComponent } from './zorro-test.component';

describe('ZorroTestComponent', () => {
  let component: ZorroTestComponent;
  let fixture: ComponentFixture<ZorroTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
