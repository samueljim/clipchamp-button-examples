import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { clipchampButton } from "./clipchampButton.component";

describe("clipchampButton", () => {
  let component: clipchampButton;
  let fixture: ComponentFixture<clipchampButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [clipchampButton]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clipchampButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
