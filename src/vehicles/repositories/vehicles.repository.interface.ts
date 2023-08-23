import { Output } from '@interfaces/output.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'

export interface VehiclesRepository {
  findAll(): Output<Vehicle[]>
  create(data: CreateVehicleDto): Output<Vehicle>
  findOne(id: string): Output<Vehicle>
  remove(id: string): Output<Vehicle>
  update(id: string, data: UpdateVehicleDto): Output<Vehicle>
}
