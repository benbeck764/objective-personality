/*
  Warnings:

  - Made the column `CreatedDate` on table `OPSTypedPerson` required. This step will fail if there are existing NULL values in that column.
  - Made the column `LastUpdatedDate` on table `OPSTypedPerson` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [Type] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [SocialType] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [MBTIType] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [Temperament] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [Modality] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [FirstSaviorFunction] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [SecondSaviorFunction] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [EnergyVsInfoDom] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [ExtrovertedVsIntroverted] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [GlassLizard] BIT NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [AnimalStack] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [FirstAnimal] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [SecondAnimal] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [ThirdAnimal] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [FourthAnimal] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [BiologicalSex] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [PictureUrl] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [UniqueId] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [CreatedDate] DATETIME2 NOT NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ALTER COLUMN [LastUpdatedDate] DATETIME2 NOT NULL;
ALTER TABLE [dbo].[OPSTypedPerson] ADD CONSTRAINT [OPSTypedPerson_Name_df] DEFAULT '' FOR [Name];
ALTER TABLE [dbo].[OPSTypedPerson] ADD [AirTablePictureUrl] NVARCHAR(1000),
[BlastOrConsume] NVARCHAR(1000),
[BlastSexuals] NVARCHAR(1000),
[ConsumeSexuals] NVARCHAR(1000),
[DeSexual] NVARCHAR(1000),
[DeciderAxis] NVARCHAR(1000),
[DeciderHumanNeed] NVARCHAR(1000),
[FirstFunction] NVARCHAR(1000),
[FourthFunction] NVARCHAR(1000),
[FullTypeNumber] NVARCHAR(1000),
[Jumper] BIT,
[MasculineDe] BIT,
[MasculineSensory] BIT,
[ObserverAxis] NVARCHAR(1000),
[ObserverHumanNeed] NVARCHAR(1000),
[PlayOrSleep] NVARCHAR(1000),
[PlaySexuals] NVARCHAR(1000),
[Quadra] NVARCHAR(1000),
[SecondFunction] NVARCHAR(1000),
[SensorySexual] NVARCHAR(1000),
[SexualOrientation] NVARCHAR(1000),
[SingleObserverOrDecider] NVARCHAR(1000),
[SleepSexuals] NVARCHAR(1000),
[Tags] NVARCHAR(1000),
[ThirdFunction] NVARCHAR(1000),
[Transgender] BIT,
[TypeLetter] NVARCHAR(1000),
[TypeNumber] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
