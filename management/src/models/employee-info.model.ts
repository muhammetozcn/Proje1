import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: true},
  postgresql: {schema: 'public'},
})
export class EmployeeInfo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
   
  })
  name: string;

  @property({
    type: 'string',
    required: true,
   
  })
  surname: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'phoneNumber',
      dataType: 'character varying',
      dataLength: 30,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    },
  })
  phoneNumber?: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'employeeStartDate',
      dataType: 'date',
      nullable: 'YES',
    },
  })
  employeeStartDate?: Date;

  @property({
    type: 'number',
  })
  salary?: number;

  @property({
    type: 'string'   
  })
  department?: string;
  @property({
    type: 'string',
    postgresql:{
      columnName:'title',
      dataType:'character varying',
      dataLength: 30,

    }

  })
  titles?: string;

  @property({
    type: 'string',
    postgresql:{
      columnName:'director',
      dataType:'character varying',
      dataLength: 50,
    } 
  })
  director?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EmployeeInfo>) {
    super(data);
  }
}
export class SalaryandDep {
  salary:number;
  department:string;
}

export interface EmployeeInfoRelations {
  // describe navigational properties here
}

export type EmployeeInfoWithRelations = EmployeeInfo & EmployeeInfoRelations;
