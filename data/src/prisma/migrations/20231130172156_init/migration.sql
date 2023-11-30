BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[OPSTypedPerson] (
    [Id] NVARCHAR(1000) NOT NULL,
    [Name] NVARCHAR(1000) NOT NULL,
    [Type] NVARCHAR(1000) NOT NULL,
    [SocialType] NVARCHAR(1000) NOT NULL,
    [MBTIType] NVARCHAR(1000) NOT NULL,
    [Temperament] NVARCHAR(1000) NOT NULL,
    [Modality] NVARCHAR(1000) NOT NULL,
    [FirstSaviorFunction] NVARCHAR(1000) NOT NULL,
    [SecondSaviorFunction] NVARCHAR(1000) NOT NULL,
    [EnergyVsInfoDom] NVARCHAR(1000) NOT NULL,
    [ExtrovertedVsIntroverted] NVARCHAR(1000) NOT NULL,
    [GlassLizard] BIT NOT NULL,
    [AnimalStack] NVARCHAR(1000) NOT NULL,
    [FirstAnimal] NVARCHAR(1000) NOT NULL,
    [SecondAnimal] NVARCHAR(1000) NOT NULL,
    [ThirdAnimal] NVARCHAR(1000) NOT NULL,
    [FourthAnimal] NVARCHAR(1000) NOT NULL,
    [BiologicalSex] NVARCHAR(1000) NOT NULL,
    [PictureUrl] NVARCHAR(1000) NOT NULL,
    [UniqueId] NVARCHAR(1000) NOT NULL,
    [AirTableCreatedDate] DATETIME2 NOT NULL,
    [AirTableLastUpdatedDate] DATETIME2 NOT NULL,
    [CreatedDate] DATETIME2 CONSTRAINT [OPSTypedPerson_CreatedDate_df] DEFAULT CURRENT_TIMESTAMP,
    [LastUpdatedDate] DATETIME2,
    CONSTRAINT [OPSTypedPerson_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[OPSTypedPersonLink] (
    [Id] NVARCHAR(1000) NOT NULL,
    [Href] NVARCHAR(1000) NOT NULL,
    [Value] NVARCHAR(1000) NOT NULL,
    [OPSTypedPersonId] NVARCHAR(1000),
    CONSTRAINT [OPSTypedPersonLink_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- AddForeignKey
ALTER TABLE [dbo].[OPSTypedPersonLink] ADD CONSTRAINT [OPSTypedPersonLink_OPSTypedPersonId_fkey] FOREIGN KEY ([OPSTypedPersonId]) REFERENCES [dbo].[OPSTypedPerson]([Id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
