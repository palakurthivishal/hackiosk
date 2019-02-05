import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGenComponent } from './token-gen.component';

describe('TokenGenComponent', () => {
  let component: TokenGenComponent;
  let fixture: ComponentFixture<TokenGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
