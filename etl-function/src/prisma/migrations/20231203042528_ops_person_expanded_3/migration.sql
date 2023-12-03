BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[OPSTypedPerson] ADD [DoubleDecider] BIT,
[DoubleObserver] BIT,
[EnergyDominant] BIT,
[ExtroversionPercentage] FLOAT(53),
[ExtroversionScale] INT,
[InfoDominant] BIT,
[ModalityLetters] NVARCHAR(1000),
[ModalityName] NVARCHAR(1000),
[SingleDecider] BIT,
[SingleObserver] BIT,
[TemperamentLong] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
