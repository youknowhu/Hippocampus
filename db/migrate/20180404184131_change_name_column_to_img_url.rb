class ChangeNameColumnToImgUrl < ActiveRecord::Migration[5.1]
  def change
    rename_column :listing_photos, :image_url, :img_url
  end
end
