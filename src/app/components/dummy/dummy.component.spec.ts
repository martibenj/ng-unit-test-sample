import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelService } from 'src/app/services/label/label.service';
import { DummyComponent } from './dummy.component';

const labelServiceMock = {
  getLabel: jasmine.createSpy('LabelService')
};

const somethingElse = 'Something else';

describe('DummyComponent', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let spyLabelService: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DummyComponent
      ],
      providers: [
        { provide: LabelService, useValue: labelServiceMock }
      ]
    }).compileComponents();

    spyLabelService = TestBed.get(LabelService).getLabel.and.returnValue(somethingElse);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Tests Angular lifecycle', () => {
    describe('On Component creation', () => {
      it('exists', () => {
        expect(component).toBeTruthy();
      });

      it('has initial value for Label', () => {
        expect(component.label).toEqual('Initial Label');
      });
    });
  });

  describe('Test User actions', () => {
    describe('on click changeLabel', () => {
      beforeEach(() => {
        // Reset calls to Spy
        spyLabelService.calls.reset();
      });

      it('calls the service', () => {
        // Call Component function
        component.changeLabel();

        expect(spyLabelService).toHaveBeenCalled();
      });

      it('changes the label', () => {
        // Call Component function
        component.changeLabel();

        expect(component.label).toEqual(somethingElse);
      });
    });
  });
});
