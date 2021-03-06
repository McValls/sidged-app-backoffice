import { SubjectsService } from './../../../../services/subjects/subjects.service';
import { TimesService } from './../../../../services/times/times.service';
import { CoursesService } from './../../../../services/courses/courses.service';
import { CareersService } from './../../../../services/careers/careers.service';
import { Time } from './../../../../model/time/time.model';
import { PeriodType } from './../../../../model/period/period.model';
import { Shift } from './../../../../model/course/course.model';
import { Career } from './../../../../model/career/career.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject/subject.model';

@Component({
	selector: 'app-course-create',
	templateUrl: './course-create.component.html',
	styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

	form: FormGroup;
	loading: boolean;
	shifts: Array<Shift>;
	periodTypes: Array<PeriodType>;
	timesSince: Array<Time>;
	timesUntil: Array<Time>;
  subjects: Array<Subject>

	constructor(
    private router: Router,
    private subjectsService: SubjectsService,
		private coursesService: CoursesService,
		private timesService: TimesService
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			name: new FormControl('', [Validators.required]),
			shift: new FormControl('', [Validators.required]),
			year: new FormControl('', [Validators.required]),
			periodType: new FormControl('', [Validators.required]),
			periodNumber: new FormControl('', [Validators.required]),
			courseCode: new FormControl('', [Validators.required]),
			timeSinceId: new FormControl('', [Validators.required]),
			timeUntilId: new FormControl('', [Validators.required]),
			subjectCode: new FormControl('', [Validators.required]),
			chair: new FormControl('')
		});

		this.getSubjects();
		this.getShifts();
		this.getPeriodTypes();
		this.getTimes();

	}

	private getSubjects() {
		this.subjectsService.getAll().subscribe(
			(data: Array<Subject>) => {
				this.subjects = data;
			});
	}

	private getShifts() {
		this.shifts = new Array<Shift>();
		this.shifts.push(Shift.MORNING);
		this.shifts.push(Shift.AFTERNOON);
		this.shifts.push(Shift.NIGHT);
	}

	private getPeriodTypes() {
		this.periodTypes = new Array<PeriodType>();
		this.periodTypes.push(PeriodType.QUARTERLY);
		this.periodTypes.push(PeriodType.ANNUAL);
		this.periodTypes.push(PeriodType.SUMMER);
	}

	public getShift(shift: Shift) {
		return this.coursesService.getShift(shift);
	}

	public getPeriod(periodType: PeriodType) {
		return this.coursesService.getPeriodType(periodType);
	}

	public getTimes() {
		this.timesSince = new Array<Time>();
		this.timesUntil = new Array<Time>();

		return this.timesService.getTimes()
			.then((times: Array<Time>) => {
				this.timesSince = times;
				this.timesUntil = times;
			}, err => {
				console.log(err);
			});
	}

	public mustHavePeriodNumber(): boolean {
		const periodType = this.formPeriodType.value;
		return periodType === PeriodType.BIANNUAL || periodType === PeriodType.QUARTERLY;
	}

	public createCourse() {
		Object.keys(this.form.controls).forEach(field => {
			this.form.get(field).markAsTouched();
		});
		this.loading = true;

		this.coursesService.createCourse(this.formName.value, this.formShift.value, this.formYear.value, this.formPeriodType.value,
			this.formPeriodNumber.value, this.formCourseCode.value,
			this.formTimeSince.value, this.formTimeUntil.value, this.formSubjectCode.value, this.formChair.value)
			.then(() => {
				this.loading = false;
				this.backToCourses();
			}, err => {
				console.log('Error ' + err);
				this.loading = false;
			})
	}

	public backToCourses() {
		this.router.navigate(['/dashboard/courses']);
	}

	get formName() { return this.form.get('name') }
	get formSubjectCode() { return this.form.get('subjectCode') }
	get formShift() { return this.form.get('shift') }
	get formYear() { return this.form.get('year') }
	get formPeriodType() { return this.form.get('periodType') }
	get formPeriodNumber() { return this.form.get('periodNumber') }
	get formTimeSince() { return this.form.get('timeSinceId') }
	get formTimeUntil() { return this.form.get('timeUntilId') }
	get formChair() { return this.form.get('chair') }
	get formCourseCode() { return this.form.get('courseCode') }
}
