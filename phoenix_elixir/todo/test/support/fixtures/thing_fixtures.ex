defmodule Todo.ThingFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Todo.Thing` context.
  """

  @doc """
  Generate a item.
  """
  def item_fixture(attrs \\ %{}) do
    {:ok, item} =
      attrs
      |> Enum.into(%{
        person_id: 42,
        status: 42,
        text: "some text"
      })
      |> Todo.Thing.create_item()

    item
  end
end
