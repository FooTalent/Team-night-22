import AppError from "../../../config/AppError.js";
import CustomController from "../../../libraries/customs/controller.js";
import convertToUTC from "../../../libraries/utils/convertToUTC.js";
import validateFields from "../../../libraries/utils/validatefiels.js";
import Service from "../logic/service.js";

export default class Controller extends CustomController {
  constructor() {
    super(new Service);
    this.requieredfield = ["title", "level", "language", "teacher", "program"]
  }
  get = async (req, res, next) => {
    try {
      const { isTemplate } = req.query;

      let filter = {}
      // Agrega el filtro isTemplate si es necesario
      filter.isTemplate = isTemplate === true || false
      const elements = await this.service.get(filter)

      res.sendSuccessOrNotFound(elements);
    } catch (error) {
      next(error);
    }
  }
  getClassCalendar = async (req, res, next) => {
    try {
      const { teacherId, startDate, endDate } = req.query;

      // Validar que se proporcione el teacherId
      if (!teacherId) { throw new AppError('Falta el ID del profesor',400); }

      // Convierte las fechas a UTC si es necesario
      const utcStartDate = startDate ? convertToUTC(startDate) : undefined;
      const utcEndDate = endDate ? convertToUTC(endDate, true) : undefined;

      const elements = await this.service.getClassesByTeacherIdAndDateRange(teacherId, utcStartDate, utcEndDate);

      res.sendSuccessOrNotFound(elements);
    } catch (error) {
      next(error);
    }
  }

  create = async (req, res, next) => {
    try {
      const newElement = validateFields(req.body, this.requieredfield);
      const { description, daytime, isTemplate} = req.body
      const element = await this.service.create({...newElement, description, daytime, isTemplate});
      res.sendSuccess(element)
    } catch (error) {
      next(error)
    }
  }

  
}