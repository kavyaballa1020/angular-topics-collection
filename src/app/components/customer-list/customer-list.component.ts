import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CustomerlistComponent {
  customers = [
    { no: 1, name: 'Rahul Dravid', address: 'Bangalore', city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { no: 2, name: 'Sachin Tendulkar', address: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { no: 3, name: 'Saurav Ganguly', address: 'Kolkata', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { no: 4, name: 'Mahendra Singh Dhoni', address: 'Ranchi', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { no: 5, name: 'Virat Kohli', address: 'Delhi', city: 'Delhi', state: 'Delhi', country: 'India' }
  ];

  selectedCustomer = { no: 0, name: '', address: '', city: '', state: '', country: '' };
  isEdit = false;

  onEdit(customer: any) {
    this.isEdit = true;
    this.selectedCustomer = { ...customer };
  }

  onUpdate() {
    const index = this.customers.findIndex(c => c.no === this.selectedCustomer.no);
    if (index > -1) {
      this.customers[index] = { ...this.selectedCustomer };
      alert('Customer updated successfully!');
    } else {
      this.selectedCustomer.no = this.customers.length + 1;
      this.customers.push({ ...this.selectedCustomer });
      alert('Customer added successfully!');
    }
    this.resetForm();
  }

  onDelete(no: number) {
    const confirmed = confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
      this.customers = this.customers.filter(c => c.no !== no);
    }
  }

  resetForm() {
    this.selectedCustomer = { no: 0, name: '', address: '', city: '', state: '', country: '' };
    this.isEdit = false;
  }
}
