export class Students {
    id?: number;
    student_id: string;
    first_name: string;
    last_name: string;
	major_id: string;
    address:string;
    clear() {
		this.student_id = null;
		this.first_name=null;
		this.last_name=null;
		this.major_id = null;
        this.address = null;
    }
}
